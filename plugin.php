<?php
/**
 * Plugin Name:       Pano 360 Viewer
 * Description:       Blocks made.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Xuyun Zeng
 * Text Domain:       bdg
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */

function bdg_blocks_plugin_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'bdg_blocks_plugin_init' );

function bdg_blocks_scripts_init() {
	wp_register_script( 'bdg_three', plugins_url( 'assets/js/three.min.js', __FILE__ ), null, '1.0', true );
	wp_enqueue_script( 'bdg_three' );

	wp_register_script( 'bdg_panolens', plugins_url( 'assets/js/panolens.min.js', __FILE__ ), null, '1.0', true );
	wp_enqueue_script( 'bdg_panolens' );

	wp_register_script( 'bdg_main', plugins_url( 'assets/js/main.js', __FILE__ ), null, '1.0', true );
	wp_enqueue_script( 'bdg_main' );
}
add_action( 'enqueue_block_assets', 'bdg_blocks_scripts_init');