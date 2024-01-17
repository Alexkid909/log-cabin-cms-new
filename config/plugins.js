const getRedisConnection = (env) => {
  const connection = {
    host: env("REDIS_HOST", "127.0.0.1"),
    port: env.float("REDIS_PORT", 6379),
    db: 0,
  };

  if (env("ENV_NAME") !== "dev") {
    connection.username = env("REDIS_USERNAME", "");
    connection.password = env("REDIS_PASSWORD", "");
  }

  return connection;
};

module.exports = ({ env }) => ({
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  redis: {
    config: {
      connections: {
        default: {
          connection: getRedisConnection(env),
          settings: {
            debug: true,
          },
        },
      },
    },
  },
  // Step 2: Configure the redis cache plugin
  "rest-cache": {
    enabled: ['prod', 'preprod'].includes(env("ENV_NAME")),
    config: {
      provider: {
        name: "redis",
        options: {
          max: 32767,
          connection: "default",
        },
      },
      strategy: {
        keysPrefix: env("ENV_NAME"),
        logs: true,
        maxAge: 24 * 60 * 60 * 1000,
        method: "GET",
        resetOnStartup: false,
        enableEtag: false,
        debug: true,
        clearRelatedCache: false,
        contentTypes: [
          "api::page.page",
          "api::feature.feature",
          "api::q-and-a.q-and-a",
          "api::content-icon.content-icon",
          "api::site-meta.site-meta",
          "api::banner.banner",
          "api::navigation-category.navigation-category",
        ],
      },
    },
  },
});