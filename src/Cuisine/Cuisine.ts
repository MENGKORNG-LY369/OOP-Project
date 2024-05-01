import { MealType } from "../Constant/Meal";

export class Cuisine {
    constructor(
        public meal: string,
        public category: MealType,
        public quantity: number
    ) {
        this.meal = meal;
        this.category = category;
        this.quantity = quantity;
    }

    public getMeal(): string { return this.meal; }
}