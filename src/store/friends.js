import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useDividerStore } from './divider'

export const useFriendsStore = defineStore('friends', () => {
    const friendsList = ref([
        {
            id: 1,
            name: 'Баба Галя',
        },
        {
            id: 2,
            name: 'Дід Петро',
        },
        {
            id: 3,
            name: 'Онука Оленка',
        },
    ])

    const getFriendById = computed(() => (friendId) => friendsList.value.find((friend) => friend.id == friendId));

    function addFriend(friend) {
        friendsList.value.push({
            id: new Date().getTime(),
            ...friend,
        });
    }
    function deleteFriend(friendId) {
        friendsList.value = friendsList.value.filter((friend) => friend.id !== friendId);
        const divider = useDividerStore()
        divider.deleteItemByFriendId(friendId)
    }

    return { friendsList, getFriendById, addFriend, deleteFriend }
})
