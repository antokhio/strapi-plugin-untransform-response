import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
  Object.entries(strapi.controllers).forEach(
    ([key, controller]: [string, any]) => {
      if (controller.transformResponse) {
        strapi.controllers[key].transformResponse = (
          data: unknown,
          meta: unknown
        ) => ({
          data,
          meta,
        });
      }
    }
  );
};
