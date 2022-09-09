import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ItemAdded as ItemAddedEvent,
  ItemSoldTo as ItemSoldToEvent,
  ItemToSeller as ItemToSellerEvent
} from "../generated/Marketplace/Marketplace"

import { ItemAdded, ItemToSeller, ItemSoldTo} from "../generated/schema"

export function handleItemAdded(event: ItemAddedEvent): void {
 let itemAdded =  ItemAdded.load(getIdFromEvenFromtParams(event.params.itemId, event.params.itemName))
 if(!itemAdded){
  itemAdded = new ItemAdded(getIdFromEvenFromtParams(event.params.itemId, event.params.itemName))
 }
//  itemAdded.itemName = event.params.itemName
itemAdded.itemName = event.params.itemName
itemAdded.itemId= event.params.itemId

}

export function handleItemSoldTo(event: ItemSoldToEvent): void {
  let itemBought = ItemSoldTo.load(getIdFromEventParams(event.params.buyer, event.params.itemName))
  if(!itemBought){
    itemBought=new ItemSoldTo(getIdFromEventParams(event.params.buyer, event.params.itemName))
  }
  itemBought.buyer = event.params.buyer
  itemBought.itemName= event.params.itemName
  itemBought.save()
}

export function handleItemToSeller(event: ItemToSellerEvent): void {
  let itemSold = ItemToSeller.load(getIdFromEventParams(event.params.seller, event.params.itemName))
  if(!itemSold){
    itemSold = new ItemToSeller(getIdFromEventParams(event.params.seller, event.params.itemName))
  }
  itemSold.seller= event.params.seller
  itemSold.itemName= event.params.itemName
  itemSold.save()

}
function getIdFromEvenFromtParams(id:BigInt, itemName:string):string{
  return id.toHexString() + itemName
}
function getIdFromEventParams( address: Bytes, name: string):string {
  return address.toHexString() + name
}