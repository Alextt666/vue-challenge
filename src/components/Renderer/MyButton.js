import { h } from "vue";
export const MyButton = (props, { emit, slots }) => {
  const { disabled } = props;
  console.log(disabled);
  return h(
    "button",
    {
      disabled: disabled,
      onClick: (el) => emit("custom-click"),
    },
    slots.default()
  );
};
