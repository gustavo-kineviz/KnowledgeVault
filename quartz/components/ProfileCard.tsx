import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ProfileCard: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "profile-card")}>
      <div class="profile-content">
        <img 
          src="https://github.com/gustavo-kineviz/static-files/blob/main/pfp_matias.jpg?raw=true" 
          alt="Gustavo" 
          class="profile-image"
        />
      </div>
    </div>
  )
}

ProfileCard.css = `
.profile-card {
  margin-bottom: 1rem;
}

.profile-content {
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1rem;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
`

export default (() => ProfileCard) satisfies QuartzComponentConstructor