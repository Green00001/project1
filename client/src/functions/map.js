

let userLocation;

export const mapLocation = async (setPosition, map) => {
    try {
        const position = await new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            } else {
                reject(new Error('Geolocation is not supported by this browser.'));
            }
        });
         userLocation = [position.coords.latitude, position.coords.longitude];
        // setPosition(userLocation);
        setPosition([36.7474, 10.1871]);
        return [36.7474, 10.1871]
        // return userLocation;
    } catch (error) {
        console.error(error);
        return null;
    }
};
