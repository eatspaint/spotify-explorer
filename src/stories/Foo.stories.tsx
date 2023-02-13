import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

const Foo = ({ text = "Foo", onClick }: { text: string; onClick(): void }) => (
  <button onClick={onClick}>{text}</button>
);

export default {
  component: Foo,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof Foo>;

const Template: ComponentStory<typeof Foo> = (args) => <Foo {...args} />;

export const Bar = Template.bind({});

Bar.args = {
  text: "I'm button",
};
