import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useDividerStore } from './divider'

export const useGiftsStore = defineStore('gifts', () => {
    const giftsList = ref([
        {
            id: 11,
            title: 'Торт',
        },
        {
            id: 22,
            title: 'Листівка',
        },
        {
            id: 33,
            title: 'Шовдарь',
        },
    ])

    const getGiftById = computed(() => (giftId) => giftsList.value.find((gift) => gift.id == giftId))

    function addGift(gift) {
        giftsList.value.push({
            id: new Date().getTime(),
            ...gift,
        })
    }
    function deleteGift(giftId) {
        giftsList.value = giftsList.value.filter((gift) => gift.id !== giftId)
        const divider = useDividerStore()
        divider.deleteItemByGiftId(giftId)
    }

    return { giftsList, getGiftById, addGift, deleteGift }
})
