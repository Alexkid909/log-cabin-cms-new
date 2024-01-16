'use strict';

/**
 * site-meta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-meta.site-meta');
