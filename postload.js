// Fetch template
const descriptionTemplate = document.querySelector('template.description');

function makeDescription(miComponent, cDataSets) {

    // Find targeted wrapper
    const wrapper = document.querySelector(`section.${miComponent}`);

    // Add contents
    cDataSets.forEach((cDataSet) => {

        // Clone template
        const descriptionClone = descriptionTemplate.content.cloneNode(true);

        // Nodes of elements
        const container = descriptionClone.querySelector('section.container');
        const component = descriptionClone.querySelector('span.component');
        const trigger = descriptionClone.querySelector('span.trigger');
        const unOrderedList = descriptionClone.querySelector('ul.content');

        // Generate headings
        if (cDataSet.component) {
            component.innerHTML = cDataSet.component;
        };
        if (cDataSet.trigger) {
            trigger.innerHTML = `&#58; ${cDataSet.trigger}`;
        };

        // Generate list content
        cDataSet.content.forEach((cData) => {
            const newBulletPoint = document.createElement('li');
            newBulletPoint.innerHTML = cData;
            unOrderedList.appendChild(newBulletPoint);
        });

        // Append filled template to wrapper
        wrapper.appendChild(descriptionClone);

    });

}
