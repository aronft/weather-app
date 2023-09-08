const celsiousFahrenheitSwap = ({ temperature }) => {
    if (temperature.unit === 'C') {
        return {
            value: (temperature.value * 9) / 5 + 32,
            unit: 'F',
        }
    }

    if (temperature.unit === 'F') {
        return {
            value: ((temperature.value - 32) * 5) / 9,
            unit: 'C',
        }
    }
}

export const celsiousFahrenheitSwapForeCast = (array) => {
    return array.map((item) => {
        if (item.temp !== undefined) {
            item.temp = celsiousFahrenheitSwap({
                temperature: item.temp,
            })
        }

        if (item.temperatureMax !== undefined) {
            item.temperatureMax = celsiousFahrenheitSwap({
                temperature: item.temperatureMax,
            })
        }

        if (item.temperatureMin !== undefined) {
            item.temperatureMin = celsiousFahrenheitSwap({
                temperature: item.temperatureMin,
            })
        }
        return item
    })
}
