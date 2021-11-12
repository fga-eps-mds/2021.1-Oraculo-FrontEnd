import React, { useState } from "react";

import { StyledSearchBar, StyledFilterDiv } from "./styles";

import { GrFormSearch } from "react-icons/gr";
// inclusion_date ,

const recordFields = {
  register_number: {
    label: "Número de registro",
    value: "",
    selected: true,
  },
  city: {
    label: "Cidade",
    value: "",
  },
  state: {
    label: "Estado",
    value: "",
  },
  requester: {
    label: "Solicitante",
    value: "",
  },
  document_type: {
    label: "Tipo do documento",
    value: "",
  },
  document_number: {
    label: "Número do documento",
    value: "",
  },
  description: {
    label: "Descrição",
    value: "",
  },
  sei_number: {
    label: "Número do SEI",
    value: "",
  },
  receipt_form: {
    label: "Forma de recebimento",
    value: "",
  },
  contact_info: {
    label: "Informações de contato",
    value: "",
  },
  situation: {
    label: "Status",
    value: "",
  },
  created_by: {
    label: "Criador",
    value: "",
  },
  assigned_to: {
    label: "Responsável",
    value: "",
  },
  history: {
    label: "Histórico",
    value: "",
  },
  document_date: {
    label: "Data",
    value: "",
  },
};

const RenderFilters = ({ handleWhere }) => {
  // Acrescentando termo para busca
  const [options, setOptions] = useState(recordFields);
  const { where, setWhere } = handleWhere;

  function onChange(event) {
    setOptions((prev) => ({
      ...prev,
      [event.target.id]: {
        ...prev[event.target.id],
        value: event.target.value,
      },
    }));
    setWhere((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  }

  function changeOption(event, key) {
    const oldOpt = {
      [key]: {
        label: options[key].label,
        value: "",
        selected: false,
      },
    };
    const newOpt = {
      [event.target.value]: {
        label: options[event.target.value].label,
        value: options[key].value,
        selected: true,
      },
    };
    setOptions((prev) => ({ ...prev, ...oldOpt, ...newOpt }));

    if (where[key]) {
      delete where[key];
      setWhere({ ...where, [event.target.value]: options[key].value });
    }
  }

  const removeFilter = (key) => {
    delete where[key];
    const newOpt = {
      [key]: {
        label: options[key].label,
        value: "",
        selected: false,
      },
    };
    setWhere({ ...where });
    setOptions((prev) => ({ ...prev, ...newOpt }));
  };

  return (
    <StyledFilterDiv>
      {Object.entries(options).map(([key, { selected }]) => {
        return (
          selected && (
            <StyledSearchBar>
              <select onChange={(event) => changeOption(event, key)}>
                {Object.entries(options).map(
                  ([optKey, { label, selected: optSelected }]) =>
                    !optSelected || key === optKey ? (
                      <option selected={key === optKey} value={optKey}>
                        {label}
                      </option>
                    ) : null
                )}
              </select>
              <button class="search-icon">
                <GrFormSearch size="3rem" />
              </button>
              <input
                id={key}
                type="text"
                value={options[key].value}
                onChange={(event) => onChange(event)}
              />
              <button class="x-button" onClick={() => removeFilter(key)}>
                X
              </button>
            </StyledSearchBar>
          )
        );
      })}
      <button
        class="add-filter"
        onClick={() => {
          const nextNotSelected = Object.entries(options).find(
            ([, { selected }]) => !selected
          );
          if (nextNotSelected)
            setOptions((prev) => ({
              ...prev,
              [nextNotSelected[0]]: { ...nextNotSelected[1], selected: true },
            }));
        }}
      >
        Adicionar filtro
      </button>
    </StyledFilterDiv>
  );
};

export default RenderFilters;
