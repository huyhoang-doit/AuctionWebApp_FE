import { Jewelry } from "../models/Jewelry";
import { mapUser } from "./mapUser";

export function mapJewelry(jewelryData: any): Jewelry {
    return {
      id: jewelryData.id,
      name: jewelryData.name,
      description: jewelryData.description,
      user: mapUser(jewelryData.user),
      brand: jewelryData.brand,
      category: jewelryData.category,
      material: jewelryData.material,
      weight: jewelryData.weight
    };
  }