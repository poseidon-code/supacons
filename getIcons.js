export default async () => {
    const generic_icons = (await import('./public/generic_icons.json')).default;
    const genericIcons = JSON.parse(JSON.stringify(generic_icons));

    const brand_icons = (await import('./public/brand_icons.json')).default;
    const brandIcons = JSON.parse(JSON.stringify(brand_icons));

    let icons = {
        generic: genericIcons,
        brands: brandIcons,
    };

    return icons;
};
