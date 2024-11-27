import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AddList from '../../src/components/AddList.vue';


describe('AddList.vue', () => {
  it('should render the add button', () => {
    const wrapper = mount(AddList); // Mounts the AddList component
    const button = wrapper.find('button'); // Looks for a button element in the rendered DOM
    expect(button.exists()).toBe(true); // Verifies the button exists
  });
  

  it('should add an item to the list when the button is clicked', async () => {
    const wrapper = mount(AddList);
  
    const input = wrapper.find('input'); // Finds the input field
    const button = wrapper.find('button'); // Finds the button
  
    await input.setValue('New Item'); // Simulates typing "New Item" into the input
    await button.trigger('click'); // Simulates clicking the button
  
    const listItems = wrapper.findAll('li'); // Finds all <li> elements in the list
    expect(listItems).toHaveLength(1); // Expects only one list item
    expect(listItems[0].text()).toBe('New Item'); // Expects the first list item to have the text "New Item"
  });
  
});
