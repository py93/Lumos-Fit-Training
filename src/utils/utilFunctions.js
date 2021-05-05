export function getSortedData(state, data) {
  if (state.sortBy === "HIGH_TO_LOW_LIKES") {
    return [...data].sort((product1, product2) => {
      return Number(product2.likes) - Number(product1.likes);
    });
  }
  return data;
}

export function getFilteredData(state, data) {
  let newData = [...data];
  if (state.filters.filterByCategories.length !== 0)
    newData = newData.filter((video) =>
      state.filters.filterByCategories.includes(video.category)
    );
  return newData;
}


export function isAdded(items, id) {
  for (let item of items) {
    if (item.id === id) return true;
  }
  return false;
}

export function toggleLikeStatus(items, id) {
  return items.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        likes: item.liked ? item.likes - 1 : item.likes + 1,
        liked: !item.liked,
      };
    } else {
      return item;
    }
  });
}


export function toggleSavedStatus(items, id) {
  return items.map((item) => {
    if (item.id === id) {
      return { ...item, saved: !item.saved };
    } else {
      return item;
    }
  });
}

export function addItemChangeStatus(items, id) {
  return items.map((item) => {
    if (item.id === id) {
      return { ...item, status: { exists: true } };
    } else {
      return item;
    }
  });
}


export function addNewItem(items, item) {
  console.log(items);
  console.log(item);
  return [...items, item];
}

export function removeItem(items, removeItemId) {
  return items.filter((item) => item.id !== removeItemId);
}
