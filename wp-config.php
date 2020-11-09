<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
if(strstr($_SERVER['SERVER_NAME'], '150cps.local')){
	define( 'DB_NAME', 'local' );
	define( 'DB_USER', 'root' );
	define( 'DB_PASSWORD', 'root' );
	define( 'DB_HOST', 'localhost' );
}else{
	define( 'DB_NAME', 'kmmkcamy_150CPS' );
	define( 'DB_USER', 'kmmkcamy_helvin' );
	define( 'DB_PASSWORD', 'Dora0411!?!' );
	define( 'DB_HOST', 'localhost' );
}

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'V4WPb9nalx3nrAl0aHWk2TKE/nOwbcm3Aw5caeWvWMdpfW2OTgKbu/dHIb6XRHX1bb830Q4TZL0q0obsvlR3RQ==');
define('SECURE_AUTH_KEY',  'V7HhFcx0jN1nIC4P90l/aVBGlGfKi0GFd0kuAFNGWaxx7atdki8VvoVHgfLhuzme6ZIBrOjn9VZHxXquJBLltA==');
define('LOGGED_IN_KEY',    'oDLUU4qrltaL7+BgKcpJPEdPE89yxoJ8BdLWH9ZLwlRe+Tf0J2enXwW0UBGWh/gGq6vqLT3Afb8lAuzCSv38qg==');
define('NONCE_KEY',        'VY8pYTMeKftFT0JPh83MRqn6kXB8+bRiVaaZY5veHDInr9N3Wuy+/tN5f7LBU1rLvhtybPh7M1RbjABksiwPbw==');
define('AUTH_SALT',        'jwL5IBJkkaLY3myp56lCPiHdBJnbCwzHc5SsdYv+9pD+H3/DWyrdDwv0AXNZNFNdOi01Ue9WTVWSjh28VYHrLg==');
define('SECURE_AUTH_SALT', 'kwUTv7+3vEiEtKMOHWMymuAa1/gfcC5DssBk1xDatFolfYTCvhE+xiPyODsdFiOGDvKoAVQI7bXg5wU5mH2rbA==');
define('LOGGED_IN_SALT',   'tJkVnDhM0nWx3j9cp4EVNBUujo4nH4bEuRByQ9PviQ5y46o/y8z0HFHOU2uf6f1C0y/oa8Abgo5uKCeIDXgNMA==');
define('NONCE_SALT',       'ZK7ss0rIT3HezqHj9Y9LI8VLD66TYd8KKeJsHR7iG+kOE0eNmfhsfYY8/FuSdmu10qpHCin7xmvmSWFu/iIRsw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
