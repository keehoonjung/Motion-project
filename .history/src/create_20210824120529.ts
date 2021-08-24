interface CreateItem {}

export default class CreateItemImpl implements CreateItem {
  item = document.createElement("div");
}
