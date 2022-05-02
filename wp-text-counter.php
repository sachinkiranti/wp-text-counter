<?php
/*
Plugin Name: Wordpress Text Counter
Plugin URI: https://www.raisachin.com.np/plugins/wp-text-counter/
Description: A simple plugin to count words or characters for given text
Version: 1.0.0
Author: sachinkiranti
Author URI: https://raisachin.com.np
Text Domain: wp-text-counter
*/

defined( 'ABSPATH' ) or die( 'No direct access!' );

// Shortcode for the Frontend UI
if (! function_exists('wp_text_counter_frontend')) :

    function wp_text_counter_frontend( $atts )
    {
        extract( shortcode_atts(
                array(
                    'title' => 'Enter your text here :',
                ), $atts )
        );

        $file_path = dirname(__FILE__) . '/templates/wp-text-counter-frontend.php';

        ob_start();

        include($file_path);

        $html = ob_get_contents();
        ob_end_clean();
        return $html;
    }

endif;

add_shortcode( 'wp-text-counter', 'wp_text_counter_frontend' );

// Script
if (! function_exists('wp_text_counter_enqueue_scripts')) :

    function wp_text_counter_enqueue_scripts() {
        wp_enqueue_script('sachinkiranti-textual', 'https://unpkg.com/@sachinkiranti/textual@1.0.1/dist/textual.min.js');
        wp_enqueue_script( 'wtc-script', plugin_dir_url(__FILE__).'assets/wp-text-counter.js', array('jquery', 'sachinkiranti-textual'), null, true );
    }

endif;
add_action( 'wp_enqueue_scripts', 'wp_text_counter_enqueue_scripts' );

