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
    hashPrevPage: out.hashPrevPage,
    hashNextPage: out.hashNextPage,
    prevPage: `${env.dev.api.host}:products?${out.limit}&page=${out.prevPage}`,
    nextPage: out.nextPage,
  };
};
