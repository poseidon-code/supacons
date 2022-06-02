export default async () => {
    const generic_icons = (await import('./public/generic_icons.json')).default;
    const brand_icons = (await import('./public/brand_icons.json')).default;
    const types = ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'];

    const genericIcons = JSON.parse(JSON.stringify(generic_icons));
    const brandIcons = JSON.parse(JSON.stringify(brand_icons));

    let icons = [];

    types.forEach(type => {
        if (type === 'brands') {
            Object.keys(brandIcons).forEach(key => {
                icons.push({
                    name: key,
                    type: type,
                });
            });
        } else {
            Object.keys(genericIcons).forEach(key => {
                icons.push({
                    name: key,
                    type: type,
                });
            });
        }
    });

    icons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return icons;
};
