<script setup>
	import { computed, ref, reactive } from 'vue'
	import { useFriendsStore } from '../store/friends'
	import { useGiftsStore } from '../store/gifts'
	import { useDividerStore } from '../store/divider'

	const friends = useFriendsStore()
	const gifts = useGiftsStore()
	const divider = useDividerStore()

	let dividerObj = reactive({})
	let message = ref('')

	const noDividedGifts = computed(() => !divider.dividerList.length)

	function onAdd() {
		if (dividerObj.friendId && dividerObj.giftId) {
			divider.addItem(dividerObj);
			Object.keys(dividerObj).forEach(key => {
				dividerObj[key] = null; 
			});
			message.value = '';
		} else {
			message.value = 'Виберіть і друга, і подарунок';
			setTimeout(() => (message.value = ''), 3000);
		}
	}
</script>

<template>
    <div class="mb-10 w-75 mx-auto">
        <h3 class="text-center mb-5">Розподіл подарунків</h3>
        <div class="mb-5">
            <div v-if="noDividedGifts">Поки немає призначених подарунків</div>
            <div v-else>
                <v-list lines="two" density="compact" elevation="5" class="mb-5 bg-light-green-lighten-3">
                    <v-list-item
                        v-for="item in divider.getDividerListWithNames"
                        :key="item.id"
                        :title="item.friendName + ' - ' + item.giftName"
                        prepend-icon="mdi-view-list"
                    >
                        <template v-slot:append>
                            <v-btn
                                prepend-icon="mdi-delete"
                                density="comfortable"
                                class="mb-2"
                                @click="divider.deleteItem(item.id)"
                            >
                                Видалити
                            </v-btn>
                        </template>
                        <v-divider></v-divider>
                    </v-list-item>
                </v-list>
            </div>
        </div>

        <v-select
            v-model="dividerObj.friendId"
            :items="friends.friendsList"
            label="Виберіть друга"
            item-title="name"
            item-value="id"
            variant="solo"
            clearable
        >
        </v-select>
        <v-select
            v-model="dividerObj.giftId"
            :items="gifts.giftsList"
            label="Подарунок"
            item-title="title"
            item-value="id"
            variant="solo"
            clearable
        >
        </v-select>

        <v-btn block elevation="8" @click="onAdd">Додати</v-btn>
        <p class="text-center font-italic text-red p-3 mt-5">{{ message }}</p>
    </div>
</template>

<style lang="scss" scoped></style>
