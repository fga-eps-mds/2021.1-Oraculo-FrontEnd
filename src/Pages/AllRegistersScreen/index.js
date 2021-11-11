import React, { useEffect, useState } from "react";
import { history } from "../../history";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import MainButton from "../../Components/MainButton";
import {
  StyledTitle,
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledTop,
  ButtonDiv,
  StyledSearchBarSize,
  StyledSearchBar,
} from "./styles";

import Process from "../../Components/Process";
import Pagination from "../../Components/Pagination/index";
import {
  getProcessTotalNumber,
  getProcessByPage,
} from "../../Services/Axios/processService";
import toast from "react-hot-toast";
import { GrFormSearch } from "react-icons/gr";
       // inclusion_date ,
       
const recordFields = {
  register_number: {
    label: 'Numero de registro',
    value: '',
    selected: true
  },
  city: {
    label: 'Cidade',
    value: ''
  },
  state: {
    label: 'Estado',
    value: ''
  },
  requester: {
    label: 'Solicitante',
    value: ''
  },
  document_type: {
    label: 'Tipo do documento',
    value: ''
  },
  document_number: {
    label: 'Numero do documento',
    value: ''
  },
  description: {
    label: 'Descrição',
    value: ''
  },
  sei_number: {
    label: 'Numero do SEI',
    value: ''
  },
  receipt_form: {
    label: 'Forma de recebimento',
    value: ''
  },
  contact_info: {
    label: 'Informações de contato',
    value: ''
  },
  situation: {
    label: 'Status',
    value: ''
  },
  created_by: {
    label: 'Criador',
    value: ''
  },
  assigned_to: {
    label: 'Responsável',
    value: ''
  },
};

const AllRegistersScreen = () => {
  const [process, setProcess] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [processPerPage] = useState(30);
  const [allProcesses, setAllProcesses] = useState(0);
  // Acrescentando termo para busca
  const [searchTerm, setSearchTerm] = useState("");
  const [ where, setWhere] = useState({});
  const [ options, setOptions] = useState(recordFields);
  const [ filters, setFilters] = useState(1);
  async function setAll() {
    const temp = await getProcessTotalNumber(toast);
    setAllProcesses(temp.count);
  }

  function handleProcess() {
    history.push("/criar-registro");
    window.location.reload();
  }

  useEffect(() => {
    const fetchProcess = async () => {
      console.log(currentPage);
      const temp = await getProcessByPage(currentPage, toast,{ where});
      console.log(temp);
      setProcess(temp);
    };
    fetchProcess();
  }, [currentPage, where]);

  window.onload = function () {
    setAll();
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function onChange(event) {
    setOptions(prev => ({...prev, [event.target.id]: { ...prev[event.target.id], value: event.target.value}}))
    setWhere(prev => ({...prev, [event.target.id]: event.target.value}));
  }

  function changeOption(event, key) {
    const oldOpt = {
      [key] : {
        label: options[key].label,
        value: '',
        selected: false
      }
    }
    const newOpt = {
      [event.target.value] : {
        label: options[event.target.value].label,
        value: options[key].value,
        selected: true
      }
    }
    setOptions(prev => ({...prev, ...oldOpt, ...newOpt})); 
    if(where[key]) {
      delete where[key];
      setWhere({...where, [event.target.value]: options[key].value });
    }
  }

  const RenderFilters = () => {
    let allFilters = Object.entries(options).map(([key ,{value, selected}]) => {
      return selected && (
      <StyledSearchBar>
          <select onChange={event => changeOption(event, key)}>
            {Object.entries(options).map(([optKey ,{label, selected: optSelected}]) => (
              !optSelected || key === optKey ?
              <option selected={key === optKey} value={optKey}>{label}</option>
              : null
            ))}
          </select>
        <button>
          <GrFormSearch size="3rem" />
        </button>
        <input
          id={key}
          type="text"
          value={options[key].value}
          onChange={event => onChange(event)}
        />
      </StyledSearchBar>)
    })
    allFilters.push(
        <button onClick={() => {
          const nextNotSelected = Object.entries(options).find(([key, { selected }]) => !selected);
          if(nextNotSelected) setOptions(prev => ({...prev, [nextNotSelected[0]]: { ...nextNotSelected[1], selected: true }}));
        }}>
          adicionar filtro
        </button>
 )
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {allFilters}
      </div>
      
    );
  }

  return (
    <>
      <HeaderWithButtons />

      <StyledBody>
        <StyledTitle>Registros - Todos</StyledTitle>
        <StyledTop>
          <StyledSearchBarSize>
            {/* área para procurar registros */}
            <RenderFilters/>
          </StyledSearchBarSize>
          <ButtonDiv>
            <MainButton onClick={handleProcess} title={"Novo Registro"} />
          </ButtonDiv>
        </StyledTop>
        <StyledOrganizeButtons>
          <StyledBigButton>Nº do Registro</StyledBigButton>
          <StyledBigButton>Cidade</StyledBigButton>
          <StyledBigButton>UF</StyledBigButton>
          <StyledBigButton>Solicitante</StyledBigButton>
          <StyledBigButton>Inclusão</StyledBigButton>
          <StyledBigButton>Nº do SEI</StyledBigButton>
          <StyledBigButton>Tag</StyledBigButton>
          <StyledBigButton>...</StyledBigButton>
        </StyledOrganizeButtons>
        {/* Procurar registros com base no termo procurado*/}
        {process ? (
          <Process searchTerm={searchTerm} process={process} />
        ) : (
          <h1 class="zero-registros">
            Não há registros cadastrados no sistema
          </h1>
        )}
        {/* Paginação dos registros*/}
        <Pagination
          processPerPage={processPerPage}
          totalProcess={allProcesses}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default AllRegistersScreen;
