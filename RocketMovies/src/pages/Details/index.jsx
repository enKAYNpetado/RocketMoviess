import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { FiArrowLeft } from "react-icons/fi"
import { FiClock } from "react-icons/fi"
import { Container, Content, Section2 } from "./styles"
import { FiStar } from "react-icons/fi"
import { Link } from "react-router-dom"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function Details() {
  const [data, setData] = useState(null)

  const { user } = useAuth()

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      console.log(response.data)
      setData(response.data)
    }
    fetchNote()
  }, [])

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <button className="exclude" onClick={handleRemove}>
              <span>Excluir filme</span>
            </button>
            <Link onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </Link>
            <h1>{data.title}</h1>
            <div className="stars">
              {data.rating}
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>

            <div className="info">
              <img src={avatarURL} alt="foto de perfil" />
              <p>Por {user.name}</p>
              <FiClock />
            </div>

            {data.tags && (
              <Section2 title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section2>
            )}
            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  )
}
