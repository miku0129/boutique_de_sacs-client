//FireStoreにおいてデータは必ずしも追加順に格納されないため
//最後尾のIDを取得するためにソートする必要がある。
export const getTailendId = (items: Item[]) => {
    const array_of_id_of_items = items.map((item) => item.id);
    const sorted_array_of_id_of_items = array_of_id_of_items.sort(
      (a, b) => a - b
    );
    const id_for_the_new_item =
      sorted_array_of_id_of_items[sorted_array_of_id_of_items.length - 1] +
      1;
  
    return id_for_the_new_item;
  };