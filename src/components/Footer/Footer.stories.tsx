import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
    title: 'Footer',
    component: Footer,    
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    label: 'Footer',    }