<template lang="pug">
  section.p-8
    h2.heading.heading--secondary.mb-5 These are default styling from tailwindcss forms but can still be customizable.
    .pb-3
      label.font-bold.block Input Text
      input(type="text")
    .pb-3
      label.font-bold.block Textarea
      textarea
    .pb-3
      label.font-bold.block Select
      select(name="select")
        option option 1
        option option 2
    .pb-3
      label.font-bold.block Checkboxes
      .block
        input#check1.text-primary(type="checkbox")
        label.ml-4(for="check1") Checkbox 1
      .block
        input#check2.text-secondary(type="checkbox")
        label.ml-4(for="check2") Checkbox 2
    .pb-3
      label.font-bold.block radio buttons
      .block
        input#radio1.text-primary(type="radio" name="radio")
        label.ml-4(for="radio1") radio 1
      .block
        input#radio2.text-secondary(type="radio" name="radio")
        label.ml-4(for="radio2") radio 2
</template>