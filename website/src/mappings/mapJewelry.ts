import { Jewelry } from "../models/Jewelry";
import { mapUser } from "./mapUser";

export function mapJewelry(jewelryData: any): Jewelry {
  return {
    id: jewelryData.id,
    name: jewelryData.name,
    description: jewelryData.description,
    user: mapUser(jewelryData.user),
    brand: jewelryData.brand,
    buyNowPrice: jewelryData.buyNowPrice,
    category: jewelryData.category,
    material: jewelryData.material,
    weight: jewelryData.weight,
    isHolding: jewelryData.isHolding,
    state: jewelryData.state,
    receivedDate: jewelryData.receivedDate,
    deliveryDate: jewelryData.deliveryDate
  };
}