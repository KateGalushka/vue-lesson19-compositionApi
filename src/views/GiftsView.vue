<script setup>
import { reactive } from 'vue'
import { useGiftsStore } from '../store/gifts.js'

const gifts = useGiftsStore()

const gift = reactive({})
</script>

<template>
    <h2 class="text-center mb-5">Список подарунків</h2>
    <div class="w-75 mx-auto">
        <v-list lines="two" density="compact" elevation="5" class="mb-5">
            <v-list-item v-for="gift in gifts.giftsList" :key="gift.id" :title="gift.title" prepend-icon="mdi-gift">
                <template v-slot:append>
                    <v-btn
                        prepend-icon="mdi-delete"
                        density="comfortable"
                        class="mb-2"
                        @click="gifts.deleteGift(gift.id)"
                    >
                        Видалити
                    </v-btn>
                </template>
                <v-divider></v-divider>
            </v-list-item>
        </v-list>
        <v-input class="mx-auto w-75">
            <v-text-field
                label="Додати подарунок"
                v-model="gift.title"
                max-width="400"
                hint="Введіть назву подарунка"
                clearable
                persistent-clear
            ></v-text-field>
            <template v-slot:append>
                <v-btn class="mb-3" @click="gifts.addGift(gift)">Додати</v-btn>
            </template>
        </v-input>
    </div>
</template>

<style lang="scss" scoped></style>
