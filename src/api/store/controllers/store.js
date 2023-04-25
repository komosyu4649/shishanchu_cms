"use strict";

/**
 * store controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async find(ctx) {
    const user = ctx.state.user;
    const stores = await strapi.services.store.find({ "users.id": user.id });

    return stores.map((store) =>
      sanitizeEntity(store, { model: strapi.models.store })
    );
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user;

    const store = await strapi.services.store.findOne({
      id,
      "users.id": user.id,
    });

    if (!store) {
      return ctx.notFound();
    }

    return sanitizeEntity(store, { model: strapi.models.store });
  },

  async create(ctx) {
    const data = ctx.request.body;
    const createdStore = await strapi.services.store.create(data);

    return sanitizeEntity(createdStore, { model: strapi.models.store });
  },

  async update(ctx) {
    const { id } = ctx.params;
    const data = ctx.request.body;
    const updatedStore = await strapi.services.store.update({ id }, data);

    return sanitizeEntity(updatedStore, { model: strapi.models.store });
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const deletedStore = await strapi.services.store.delete({ id });

    return sanitizeEntity(deletedStore, { model: strapi.models.store });
  },
};
