import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: 'm1',
                    image: 'data:image/jpeg;base64,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',
                    title: 'Hiking',
                    description: 'was a really nice trip'
                },
                {
                    id: 'm2',
                    image: 'data:image/jpeg;base64,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',
                    title: 'Surfing',
                    description: 'I learned to surf'
                },
                {
                    id: 'm3',
                    image: 'data:image/jpeg;base64,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',
                    title: 'Interview',
                    description: 'Went really well. I hope I do really well.'
                },
            ],
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            };

            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            };
        }
    }
});

export default store;