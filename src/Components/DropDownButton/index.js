import DivSelectSetor from "./DivSelectSetor";

const DropDownButton = ({ onChangeOpt }) => {
  return (
    <DivSelectSetor>
      <select onChange={onChangeOpt}>
        <option value="1">Seção de cadastramento biográfico e biométrico e emissão de fac</option>
        <option value="2">Seção de inovação em identificação humana</option>
        <option value="3">Seção de capacitação técnica</option>
        <option value="4">Seção de atendimento interno ao cidadão e emissão de certidões</option>
        <option value="5">Seção de identificação criminal</option>
        <option value="6">Seção de comparação facial de imagens</option>
        <option value="7">Seção de comunicação social e eventos</option>
        <option value="8">Seção de programas sociais</option>
        <option value="9">Seção de identificação criminal central de flagrantes</option>
        <option value="10">Seção de retrato falado</option>
        <option value="11">Seção de informática e manutenção</option>
        <option value="12">Seção de codificação e sistematização</option>
        <option value="13">Seção de laboratório de pesquisa,desenvolvimento e levantamento papiloscópico</option>
        <option value="14">Seção de projeção de idade, disfarce e reconstituição facial</option>
        <option value="15">Seção de malote</option>
        <option value="16">Seção de verificação biométrica</option>
        <option value="17">Seção de respostas a ofícios e atestados</option>
        <option value="18">Seção de identificação de pessoas desaparecidas</option>
        <option value="19">Seção de protocoloe expediente</option>
        <option value="20">Seção de verificação biométrica online</option>
        <option value="21">Seção de elaboração de relatórios técnicos</option>
        <option value="22">Seção de necropapiloscopia</option>
        <option value="23">Seção de recursos humanos</option>
        <option value="24">Seção de tratamento de divergências biométricas</option>
        <option value="25">Seção afis</option>
        <option value="26">Seção de transportes</option>
        <option value="27">Seção de análise cadastral</option>
        <option value="28">Seção papiloscópica especializada no combate à organização criminosa e lavagem de dinheiro</option>
        <option value="29">Seção de material,patrimônio,almoxarifado e manutenção predial</option>
        <option value="30">Seção de identificação funcional</option>
        <option value="31">Seção avançada de serviços papiloscópicos</option>
        <option value="32">Seção de projetos estratégicos</option>
        <option value="33">Seção de postos de identificação biométrica</option>
      </select>
    </DivSelectSetor>
  );
};

export default DropDownButton;
