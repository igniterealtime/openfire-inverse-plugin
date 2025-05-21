/*
 * Copyright (C) 2017 Ignite Realtime Foundation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.igniterealtime.openfire.plugin.inverse;

import org.directwebremoting.json.types.JsonObject;
import org.jivesoftware.openfire.XMPPServer;
import org.jivesoftware.util.JiveGlobals;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.Collections;

/**
 * Generates a JSON object that contains configuration for the inVerse web application.
 *
 * @author Guus der Kinderen, guus@gmail.com
 */
public class ConfigServlet extends HttpServlet
{
    private static final Logger Log = LoggerFactory.getLogger( ConfigServlet.class );

    public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException
    {
        Log.trace( "Processing doGet()" );

        final boolean inbandRegEnabled = XMPPServer.getInstance().getIQRegisterHandler().isInbandRegEnabled();
        final String defaultDomain = JiveGlobals.getProperty( "inverse.config.default_domain", XMPPServer.getInstance().getServerInfo().getXMPPDomain() );
        final boolean lockedDomain = JiveGlobals.getBooleanProperty( "inverse.config.locked_domain", false );
        final String defaultEndpoint = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + "/http-bind/";
        final String loglevel = JiveGlobals.getProperty( "inverse.config.loglevel", "info" );
        final String assets_path = JiveGlobals.getProperty( "inverse.config.assets_path", "/"+InversePlugin.CONTEXT_ROOT+"/dist/" );

        // The language of the inVerse UI.
        final Language language = InversePlugin.getLanguage();

        final JSONObject config = new JSONObject();
        config.put( "sounds_path", "/" + InversePlugin.CONTEXT_ROOT + "/dist/sounds/" );
        config.put( "notification_icon", "/" + InversePlugin.CONTEXT_ROOT + "/css/images/logo/conversejs-filled.svg" );
        config.put( "i18n", language.getCode() );
        config.put( lockedDomain ? "locked_domain" : "default_domain", defaultDomain );

        if ( inbandRegEnabled )
        {
            config.put( "registration_domain", defaultDomain );
        }

        // When the domain that inVerse is locked to does not support IBB, there is no point in showing the
        // 'registration' taballowing registration. Disallowing registration explicitly will suppress the tab.
        if ( !inbandRegEnabled && lockedDomain )
        {
            config.put( "allow_registration", false );
        }

        config.put( "domain_placeholder", defaultDomain );
        config.put( "loglevel", loglevel );
        config.put( "view_mode", "fullscreen" );
        config.put( "assets_path", assets_path );

        addArrayOfTextConfigOption(config, "allowed_audio_domains");
        addArrayOfTextConfigOption(config, "allowed_image_domains");
        addArrayOfTextConfigOption(config, "allowed_video_domains");
        addBooleanConfigOption(config, "allow_adhoc_commands");
        addBooleanConfigOption(config, "allow_bookmarks");
        addBooleanConfigOption(config, "allow_contact_removal");
        addBooleanConfigOption(config, "allow_contact_requests");
        addBooleanConfigOption(config, "allow_dragresize");
        addBooleanConfigOption(config, "allow_logout");
        addBooleanConfigOption(config, "allow_message_corrections");
        addBooleanConfigOption(config, "allow_message_retraction");
        addBooleanConfigOption(config, "allow_muc_invitations");
        addBooleanConfigOption(config, "allow_non_roster_messaging");
        addBooleanConfigOption(config, "allow_public_bookmarks");
        // addBooleanConfigOption(config, "allow_registration"); // Already taken care of above.
        addBooleanConfigOption(config, "allow_url_history_change");
        addBooleanConfigOption(config, "allow_user_trust_override");
        addIntegerConfigOption(config, "archived_messages_page_size");
        addBooleanConfigOption(config, "auto_focus");
        addBooleanConfigOption(config, "auto_list_rooms");
        addBooleanConfigOption(config, "auto_login");
        addIntegerConfigOption(config, "auto_away");
        addIntegerConfigOption(config, "auto_xa");
        addBooleanConfigOption(config, "auto_reconnect");
        addBooleanConfigOption(config, "auto_register_muc_nickname");
        addBooleanConfigOption(config, "auto_subscribe");
        addBooleanConfigOption(config, "auto_join_on_invite");
        addArrayOfTextConfigOption(config, "auto_join_private_chats");
        addArrayOfTextConfigOption(config, "auto_join_rooms");
        addArrayOfTextConfigOption(config, "blacklisted_plugins");
        addTextConfigOption(config, "bosh_service_url");
        addBooleanConfigOption(config, "clear_cache_on_logout");
        addBooleanConfigOption(config, "clear_messages_on_reconnection");
        addArrayOfTextConfigOption(config, "chatstate_notification_blacklist");
        addJsonObjectConfigOption(config, "connection_options");
        addTextConfigOption(config, "credentials_url");
        addIntegerConfigOption(config, "csi_waiting_time");
        //addTextConfigOption(config, "loglevel"); // Already taken care of above.
        //addTextConfigOption(config, "default_domain"); // Already taken care of above.
        //addTextConfigOption(config, "registration_domain"); // Already taken care of above.
        addTextConfigOption(config, "default_state");
        addBooleanConfigOption(config, "discover_connection_methods");
        // addTextConfigOption(config, "domain_placeholder"); // Already taken care of above.
        addBooleanConfigOption(config, "embed_3rd_party_media_players");
        addJsonObjectConfigOption(config, "emoji_categories");
        addJsonObjectConfigOption(config, "emoji_categories_label");
        addTextConfigOption(config, "emoji_image_path");
        addBooleanConfigOption(config, "enable_muc_push");
        addBooleanConfigOption(config, "enable_roster_versioning");
        addBooleanConfigOption(config, "enable_smacks");
        addBooleanConfigOption(config, "fetch_url_headers");
        addBooleanConfigOption(config, "filter_by_resource");
        addArrayOfTextConfigOption(config, "filter_url_query_params");
        addTextConfigOption(config, "fullname");
        addTextConfigOption(config, "geouri_regex");
        addTextConfigOption(config, "geouri_replacement");
        addBooleanConfigOption(config, "hide_muc_participants");
        addBooleanConfigOption(config, "hide_offline_users");
        // addTextConfigOption(config, "i18n"); // Already taken care of above.
        addIntegerConfigOption(config, "idle_presence_timeout");
        addTextConfigOption(config, "image_urls_regex");
        addTextConfigOption(config, "jid");
        addBooleanConfigOption(config, "keepalive");
        addBooleanConfigOption(config, "lazy_load_vcards");
        addJsonObjectConfigOption(config, "locales");
        //addTextConfigOption(config, "locked_domain"); // Already taken care of above.
        addJsonObjectConfigOption(config, "locked_muc_domain");
        addBooleanConfigOption(config, "locked_muc_nickname");
        addBooleanConfigOption(config, "mam_request_all_pages");
        addArrayOfTextConfigOption(config, "muc_hats");
        addIntegerConfigOption(config, "muc_mention_autocomplete_min_chars");
        addTextConfigOption(config, "muc_mention_autocomplete_filter");
        addBooleanConfigOption(config, "muc_mention_autocomplete_show_avatar");
        addTextConfigOption(config, "message_archiving");
        addIntegerConfigOption(config, "message_archiving_timeout");
        addIntegerConfigOption(config, "message_limit");
        addJsonObjectConfigOption(config, "modtools_disable_assign");
        addArrayOfTextConfigOption(config, "modtools_disable_query");
        addBooleanConfigOption(config, "muc_clear_messages_on_leave");
        addBooleanConfigOption(config, "muc_disable_slash_commands");
        addTextConfigOption(config, "muc_domain");
        addArrayOfTextConfigOption(config, "muc_fetch_members");
        addIntegerConfigOption(config, "muc_history_max_stanzas");
        addBooleanConfigOption(config, "muc_instant_rooms");
        addBooleanConfigOption(config, "muc_nickname_from_jid");
        addBooleanConfigOption(config, "muc_send_probes");
        addBooleanConfigOption(config, "muc_respect_autojoin");
        addTextConfigOption(config, "muc_roomid_policy");
        addTextConfigOption(config, "muc_roomid_policy_hint");
        addTextConfigOption(config, "muc_search_service");
        addBooleanConfigOption(config, "muc_show_join_leave");
        addBooleanConfigOption(config, "muc_show_logs_before_join");
        addBooleanConfigOption(config, "muc_show_ogp_unfurls"); // Obsoleted in 9.0.0
        addBooleanConfigOption(config, "muc_subscribe_to_rai");
        addTextConfigOption(config, "nickname");
        addBooleanConfigOption(config, "notify_all_room_messages");
        addIntegerConfigOption(config, "notification_delay");
        // addTextConfigOption(config, "notification_icon"); // Already taken care of above.
        addBooleanConfigOption(config, "notify_nicknames_without_references");
        addArrayOfTextConfigOption(config, "oauth_providers");
        addBooleanConfigOption(config, "omemo_default");
        addIntegerConfigOption(config, "ping_interval");
        addBooleanConfigOption(config, "play_sounds");
        addTextConfigOption(config, "prebind_url");
        addIntegerConfigOption(config, "priority");
        addTextConfigOption(config, "providers_link");
        // addTextConfigOption(config, "assets_path"); // Already taken care of above.
        addTextConfigOption(config, "persistent_store");
        addIntegerConfigOption(config, "prune_messages_above");
        addTextConfigOption(config, "pruning_behavior");
        addArrayOfJsonObjectConfigOption(config, "push_app_servers");
        addBooleanConfigOption(config, "render_media");
        addBooleanConfigOption(config, "reuse_scram_keys");
        addArrayOfTextConfigOption(config, "rtl_langs");
        addArrayOfTextConfigOption(config, "roomconfig_whitelist");
        addTextConfigOption(config, "root");
        addBooleanConfigOption(config, "roster_groups");
        addBooleanConfigOption(config, "send_chat_state_notifications");
        addArrayOfTextConfigOption(config, "send_chat_markers");
        addBooleanConfigOption(config, "show_background");
        addBooleanConfigOption(config, "show_chat_state_notifications");
        addBooleanConfigOption(config, "show_client_info");
        addTextConfigOption(config, "show_connection_url_input");
        addBooleanConfigOption(config, "show_controlbox_by_default");
        addBooleanConfigOption(config, "show_desktop_notifications");
        addBooleanConfigOption(config, "show_message_avatar");
        addBooleanConfigOption(config, "show_images_inline"); // Obsoleted in 9.0.0
        addBooleanConfigOption(config, "show_retraction_warning");
        addBooleanConfigOption(config, "show_send_button");
        addBooleanConfigOption(config, "show_self_in_roster");
        addBooleanConfigOption(config, "show_tab_notifications");
        addBooleanConfigOption(config, "singleton");
        addIntegerConfigOption(config, "smacks_max_unacked_stanzas");
        //addTextConfigOption(config, "sounds_path"); // Already taken care of above.
        addIntegerConfigOption(config, "stanza_timeout");
        addBooleanConfigOption(config, "sticky_controlbox");
        addBooleanConfigOption(config, "strict_plugin_dependencies");
        addBooleanConfigOption(config, "synchronize_availability");
        addTextConfigOption(config, "theme");
        addTextConfigOption(config, "time_format");
        addBooleanConfigOption(config, "use_system_emojis");
        addBooleanConfigOption(config, "update_title");
        addJsonObjectConfigOption(config, "visible_toolbar_buttons");
        addTextConfigOption(config, "websocket_url");
        // addTextConfigOption(config, "view_mode"); // Already taken care of above.
        addArrayOfTextConfigOption(config, "whitelisted_plugins");
        addTextConfigOption(config, "xhr_user_search_url");

        // When no endpoint is configured, use this as a fallback.
        if (!config.has("bosh_service_url") || config.isNull("bosh_service_url")) {
            config.put( "bosh_service_url", defaultEndpoint );
        }

        try ( final Writer writer = response.getWriter() )
        {
            writer.write( config.toString( 2 ) );
            writer.flush();
        }
    }

    /**
     * Verifies if there's an Openfire property that matches <tt>inverse.config.%option%</tt>, and if so, adds the
     * value of that property (interpreted as a text) to the inverse configuration under <tt>%option%</tt> name.
     *
     * @param config The inverse configuration that possibly gets a new option value.
     * @param option the name of the inverse configuration option
     */
    static void addTextConfigOption( final JSONObject config, final String option ) {
        if (JiveGlobals.getProperty("inverse.config." + option) != null) {
            config.put(option, JiveGlobals.getProperty("inverse.config." + option));
        }
    }

    /**
     * Verifies if there's an Openfire property that matches <tt>inverse.config.%option%</tt>, and if so, adds the
     * value of that property (interpreted as a json object) to the inverse configuration under <tt>%option%</tt> name.
     *
     * @param config The inverse configuration that possibly gets a new option value.
     * @param option the name of the inverse configuration option
     */
    static void addJsonObjectConfigOption( final JSONObject config, final String option ) {
        if (JiveGlobals.getProperty("inverse.config." + option) != null) {
            final JSONObject obj = new JSONObject(JiveGlobals.getProperty("inverse.config." + option));
            config.put(option, obj);
        }
    }

    /**
     * Verifies if there's an Openfire property that matches <tt>inverse.config.%option%</tt>, and if so, adds the
     * value of that property (interpreted as a boolean) to the inverse configuration under <tt>%option%</tt> name.
     *
     * @param config The inverse configuration that possibly gets a new option value.
     * @param option the name of the inverse configuration option
     */
    static void addBooleanConfigOption( final JSONObject config, final String option ) {
        if (JiveGlobals.getProperty("inverse.config." + option) != null) {
            config.put(option, JiveGlobals.getBooleanProperty("inverse.config." + option));
        }
    }

    /**
     * Verifies if there's an Openfire property that matches <tt>inverse.config.%option%</tt>, and if so, adds the
     * value of that property (interpreted as an integer) to the inverse configuration under <tt>%option%</tt> name.
     *
     * @param config The inverse configuration that possibly gets a new option value.
     * @param option the name of the inverse configuration option
     */
    static void addIntegerConfigOption( final JSONObject config, final String option ) {
        if (JiveGlobals.getProperty("inverse.config." + option) != null) {
            config.put(option, JiveGlobals.getIntProperty("inverse.config." + option, -1) );
        }
    }

    /**
     * Verifies if there's an Openfire property that matches <tt>inverse.config.%option%</tt>, and if so, adds the
     * value of that property (interpreted as an array of text elements) to the inverse configuration under <tt>%option%</tt> name.
     *
     * @param config The inverse configuration that possibly gets a new option value.
     * @param option the name of the inverse configuration option
     */
    static void addArrayOfTextConfigOption( final JSONObject config, final String option ) {
        if (JiveGlobals.getProperty("inverse.config." + option) != null) {
            final JSONArray result = new JSONArray();
            for (String value : JiveGlobals.getListProperty("inverse.config." + option, Collections.emptyList())) {
                if (value != null && !value.isEmpty()) {
                    result.put(value);
                }
            }
            config.put(option, result);
        }
    }

    /**
     * Verifies if there's an Openfire property that matches <tt>inverse.config.%option%</tt>, and if so, adds the
     * value of that property (interpreted as an array of json objects) to the inverse configuration under <tt>%option%</tt> name.
     *
     * @param config The inverse configuration that possibly gets a new option value.
     * @param option the name of the inverse configuration option
     */
    static void addArrayOfJsonObjectConfigOption( final JSONObject config, final String option ) {
        if (JiveGlobals.getProperty("inverse.config." + option) != null) {
            final JSONArray result = new JSONArray();
            for (String value : JiveGlobals.getListProperty("inverse.config." + option, Collections.emptyList())) {
                result.put(new JSONObject(value));
            }
            config.put(option, result);
        }
    }
}
