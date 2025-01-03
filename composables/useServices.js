export const useServices = () => {
    const services = ref([
        { name: "service1" },
        { name: "service2" },
    ])

    return { services }
  }
