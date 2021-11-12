import { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  CircleColor,
  ColorPickerDiv,
  StyledAlertDialog,
  StyledCreateTag,
  TagList,
} from "./styles";
import GenericBlueButton from "../GenericBlueButton";
import GenericWhiteButton from "../GenericWhiteButton";
import { Checkbox } from "antd";
import { FaPen } from "react-icons/fa";
import {
  createTag,
  editTag,
  getAllTags,
} from "../../Services/Axios/processService";
import { getInfoUser } from "../../Services/Axios/profileService";
import toast from "react-hot-toast";
import { ChromePicker } from "react-color";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30vw",
    height: "50vh",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
  },
};

const TagModal = ({ onVisibleChanged }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [allTags, setAllTags] = useState([]);
  const [isAdmin, setAdmin] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [color, setColor] = useState("#FFF");
  const [nameTag, setNameTag] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editNameTag, setEditNameTag] = useState("");
  const [editId, setEditId] = useState();
  const [tagArray, setTagArray] = useState({});

  const [allModal, setAllModal] = useState(true);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  async function fetchUserData() {
    try {
      const user = await getInfoUser(toast);
      const tags = await getAllTags();
      if (tags !== undefined) {
        //set tags
        // only if tags are not undefined
        setAllTags(tags.data);
      }
      if (user === undefined) {
        window.location.reload();
      } else {
        // if user is admin, show some things
        // only admins can see
        if (user?.levels[0].name === "admin") {
          setAdmin(true);
        }
      }
    } catch (err) {
      console.log("Erro ao carregar os dados do usuário!", err);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    onVisibleChanged(false);
  }

  //Function to send the information
  //to edit a tag
  function sendEditTag(val) {
    setEditId(val.id);
    setEditNameTag(val.name);
    setEditColor(val.color);
    setEditModal(true);
    setAllModal(false);
  }

  //function to return to all tag modal
  function returnEditFunction() {
    setEditId();
    setEditNameTag("");
    setEditColor("");
    setEditModal(false);
    setAllModal(true);
  }

  //function to edit a tag
  function editTagFunction() {
    editTag(editId, editNameTag, editColor, toast);
  }

  useEffect(() => {
    fetchUserData();
  }, [color, editModal]);

  return (
    <div>
      <Modal
        isOpen={allModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Selecione uma tag"
        style={modalStyle}
      >
        <StyledAlertDialog>
          <span>
            <h2>Escolha uma tag</h2>
            {isAdmin ? (
              <div className="headerDiv">
                <GenericBlueButton
                  onClick={() => {
                    setAllModal(false);
                    setCreateModal(true);
                  }}
                  title="Criar tag"
                />
              </div>
            ) : null}
          </span>
          {/* Add eacth tag list */}
          {/* Mapping all tags */}
          <TagList>
            {allTags.map((val) => (
              <div className="checkBoxDiv" key={val.id}>
                <Checkbox
                  checked={tagArray[val.id] || false}
                  onClick={() => {
                    setTagArray((prev) => ({
                      ...prev,
                      [val.id]: !(tagArray[val.id] || false),
                    }));
                    console.log(tagArray);
                  }}
                />
                <CircleColor style={{ backgroundColor: val.color }} />
                <p>{val.name}</p>
                <a>
                  <FaPen
                    onClick={() => {
                      sendEditTag(val);
                    }}
                    size="2rem"
                  />
                </a>
              </div>
            ))}
          </TagList>
          <div className="endOfPageDiv">
            <GenericWhiteButton title="Cancelar" onClick={closeModal} />
            <GenericBlueButton
              title="Adicionar"
              onClick={() => console.log(tagArray)}
            />
          </div>
        </StyledAlertDialog>
      </Modal>

      {/* Add new modal to create a new tag */}
      <Modal isOpen={createModal} contentLabel="Nova tag" style={modalStyle}>
        <StyledCreateTag>
          <h1>Nova Tag</h1>
          <p>Nome:</p>
          <div className="input-section">
            <input
              type="text"
              value={nameTag}
              onChange={(event) => setNameTag(event.target.value)}
            />
            <div>
              <p>Cor:</p>
              <CircleColor
                style={{ cursor: "pointer", backgroundColor: color }}
                onClick={() => setOpenColorPicker(!openColorPicker)}
              />
            </div>
          </div>
          {openColorPicker ? (
            <ColorPickerDiv>
              <ChromePicker
                color={color}
                onChangeComplete={(color) => setColor(color.hex)}
              />
            </ColorPickerDiv>
          ) : null}
          <div className="endOfPageDiv">
            {/* Button to return to another modal */}
            <GenericWhiteButton
              title="Cancelar"
              onClick={() => {
                setAllModal(true);
                setCreateModal(false);
                setNameTag("");
                setColor("");
              }}
            />
            <GenericBlueButton
              title="Criar"
              onClick={() => {
                createTag(nameTag, color, toast);
                setNameTag("");
                setColor("");
              }}
            />
          </div>
        </StyledCreateTag>
      </Modal>

      {/* Add new modal to edit a tag */}
      <Modal isOpen={editModal} contentLabel="Editar tag" style={modalStyle}>
        <StyledCreateTag>
          <h1>Editar Tag</h1>
          <p>Nome:</p>
          <div className="input-section">
            <input
              type="text"
              value={editNameTag}
              onChange={(event) => setEditNameTag(event.target.value)}
            />
            <div>
              <p>Cor:</p>
              <CircleColor
                style={{ cursor: "pointer", backgroundColor: editColor }}
                onClick={() => setOpenColorPicker(!openColorPicker)}
              />
            </div>
          </div>
          {openColorPicker ? (
            <ColorPickerDiv>
              <ChromePicker
                color={editColor}
                onChangeComplete={(color) => setEditColor(color.hex)}
              />
            </ColorPickerDiv>
          ) : null}
          <div className="endOfPageDiv">
            {/* Button to return to another modal */}
            <GenericWhiteButton
              title="Cancelar"
              onClick={() => {
                returnEditFunction();
              }}
            />
            <GenericBlueButton
              title="Editar"
              onClick={() => {
                editTagFunction();
              }}
            />
          </div>
        </StyledCreateTag>
      </Modal>
    </div>
  );
};

export { TagModal };
