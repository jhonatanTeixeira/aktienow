import {SelectQueryBuilder} from "typeorm";

export async function paginate<T>(queryBuilder: SelectQueryBuilder<T>, page: number, limit: number = 30) {
    const offset = (page * limit) - limit;

    return queryBuilder
        .skip(offset)
        .take(limit)
        .getMany()
    ;
}

export async function ordenate<T>(queryBuilder: SelectQueryBuilder<T>, order: {[field: string]: "ASC" | "DESC"}) {
    for (const field in order) {
        const direction = order[field];

        queryBuilder.addOrderBy(field, direction);
    }
}