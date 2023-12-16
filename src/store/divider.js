import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFriendsStore } from './friends'
import { useGiftsStore } from './gifts'

export const useDividerStore = defineStore(
	'divider',
	() => {
		const dividerList = ref([]);
		const getDividerListWithNames = computed(() => {
			const friends = useFriendsStore()
			const gifts = useGiftsStore()
			if (dividerList.value.length) {
				return dividerList.value.map((item) => {
					let friend = friends.getFriendById(item.friendId);
					let gift = gifts.getGiftById(item.giftId);
					let friendName = friend ? friend.name : 'unknown';
					let giftName = gift ? gift.title : 'unknown';
					return {
						id: item.id,
						friendName: friendName,
						giftName: giftName,
					}
				})
			}
		});
		const getItemByFriendId = (friendId) => computed(() => dividerList.value.find((item) => item.friendId == friendId));
		const getItemByGiftId = (giftId) => computed(() => dividerList.value.find((item) => item.giftId == giftId));

		function addItem(dividerObj) {
			dividerList.value.push({
					id: new Date().getTime(),
					...dividerObj,
			});
			// console.log('after add', dividerList)
		}
		function deleteItem(itemId) {
			dividerList.value = dividerList.value.filter((item) => item.id !== itemId);
			// console.log('after delete', dividerList)
		}
		function deleteItemByFriendId(friendId) {
			const item = getItemByFriendId(friendId).value;
			const id = item.id;
			deleteItem(id)
		}
		function deleteItemByGiftId(giftId) {
			const item = getItemByGiftId(giftId).value;
			const id = item.id;
			deleteItem(id)
		}
		return {
			dividerList,
			getDividerListWithNames,
			getItemByFriendId,
			getItemByGiftId,
			addItem,
			deleteItem,
			deleteItemByFriendId,
			deleteItemByGiftId,
		}
})
