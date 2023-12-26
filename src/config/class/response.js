import { env } from "../../env/config.js";

export const paginateResponse = (out) => {
  return {
    status: "success",
    payload: out.docs.map((w) => w.toJSON()),
    totalDocs: out.totalDocs,
    limit: out.limit,
    totalPages: out.totalPages,
    page: out.page,
    pagingCounter: out.pagingCounter,
    hasPrevPage: out.hasPrevPage,
    hasNextPage: out.hasNextPage,
    prevPage: `${env.dev.api.host}:${env.dev.api.PORT}/products?limit=${out.limit}&page=${out.prevPage}`,
    nextPage: `${env.dev.api.host}:${env.dev.api.PORT}/products?limit=${out.limit}&page=${out.nextPage}`,
  };
};
