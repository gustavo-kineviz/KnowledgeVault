import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ProfileCard: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "profile-card")}>
      <div class="profile-content">
        <img 
          src="/assets/profile.png" 
          alt="Gustavo" 
          class="profile-image"
        />
        <h4 class="profile-name">Gustavo</h4>
      </div>
    </div>)
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

.profile-name {
  margin: 0.5rem 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
}

`

export default (() => ProfileCard) satisfies QuartzComponentConstructor
