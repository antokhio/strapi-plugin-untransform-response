"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    Object.entries(strapi.controllers).forEach(([key, controller]) => {
        if (controller.transformResponse) {
            strapi.controllers[key].transformResponse = (data, meta) => ({
                data,
                meta,
            });
        }
    });
};
