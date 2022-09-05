import React, { ChangeEventHandler, FunctionComponent, useState } from "react";

type CheckboxProps = {
  id: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  label,
  onChange,
}) => {
  return (
    <li className="Checkbox">
      <input onChange={onChange} value={id} id={id} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};

type Tag = {
  name: string;
  id: string;
};

type CheckboxGroupProps = {
  tags: Tag[];
  setSelectedTags: (selectedTags: Tag[]) => void;
  selectedTags: Tag[];
};

const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({
  tags,
  setSelectedTags,
  selectedTags,
}) => {
  const handleChange = (event) => {
    if (event.target.checked) {
      setSelectedTags([
        ...selectedTags,
        tags.find((tag) => tag.id === event.target.value),
      ]);
    } else {
      setSelectedTags(
        selectedTags.filter((tag) => tag.id !== event.target.value)
      );
    }
  };
  return (
    <ul>
      <h3>Filter by tag</h3>
      {tags.map((tag) => (
        <Checkbox
          onChange={() => handleChange(event)}
          key={tag.id}
          id={tag.id}
          label={tag.name}
        />
      ))}
    </ul>
  );
};

type TagFiltersProps = {
  tags: any;
  setSelectedTags: (selectedTags: Tag[]) => void;
  selectedTags: Tag[];
};

const TagFilters: FunctionComponent<TagFiltersProps> = (
  props: TagFiltersProps
) => {
  return (
    <div className="tag-filters-container">
      <CheckboxGroup
        setSelectedTags={props.setSelectedTags}
        selectedTags={props.selectedTags}
        tags={props.tags}
      />
    </div>
  );
};

export default TagFilters;
