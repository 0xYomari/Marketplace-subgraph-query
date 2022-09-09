import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ItemAdded,
  ItemSoldTo,
  ItemToSeller
} from "../generated/Marketplace/Marketplace"

export function createItemAddedEvent(
  itemId: BigInt,
  itemName: string,
  price: BigInt,
  seller: Address,
  buyer: Address,
  listed: boolean
): ItemAdded {
  let itemAddedEvent = changetype<ItemAdded>(newMockEvent())

  itemAddedEvent.parameters = new Array()

  itemAddedEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("itemName", ethereum.Value.fromString(itemName))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("listed", ethereum.Value.fromBoolean(listed))
  )

  return itemAddedEvent
}

export function createItemSoldToEvent(
  buyer: Address,
  itemName: string
): ItemSoldTo {
  let itemSoldToEvent = changetype<ItemSoldTo>(newMockEvent())

  itemSoldToEvent.parameters = new Array()

  itemSoldToEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  itemSoldToEvent.parameters.push(
    new ethereum.EventParam("itemName", ethereum.Value.fromString(itemName))
  )

  return itemSoldToEvent
}

export function createItemToSellerEvent(
  seller: Address,
  itemName: string
): ItemToSeller {
  let itemToSellerEvent = changetype<ItemToSeller>(newMockEvent())

  itemToSellerEvent.parameters = new Array()

  itemToSellerEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemToSellerEvent.parameters.push(
    new ethereum.EventParam("itemName", ethereum.Value.fromString(itemName))
  )

  return itemToSellerEvent
}
