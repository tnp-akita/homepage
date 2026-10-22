import { GamePreviewImage } from "@/types/GamePreviewImage"
import { Work } from "@/types/Work"

const CorelynxImages: GamePreviewImage[] = [
    {
        imageSrc: "/works/corelynx/1.webp",
        displayName: "Corelynx1",
        width: 768,
        height: 432
    },
    {
        imageSrc: "/works/corelynx/2.webp",
        displayName: "Corelynx2",
        width: 768,
        height: 432
    }
]

const Corelynx: Work = {
    title: "Corelynx",
    authors: ["空中ブランコ"],
    images: CorelynxImages,
    explanation: "試合ごとに地形が変わる世界で Capture The Flag で遊ぶオンラインマルチプレイFPS。コアを見つけ占領し、敵から守り抜こう！",
    comment: null
}

const VergiliusImages: GamePreviewImage[] = [
    {
        imageSrc: "/works/vergilius/1.webp",
        displayName: "Vergilius1",
        width: 768,
        height: 432
    },
    {
        imageSrc: "/works/vergilius/2.webp",
        displayName: "Vergilius2",
        width: 768,
        height: 432
    }
]

const Vergilius: Work = {
    title: "Vergilius",
    authors: ["Δmp", "レイル", "℃(せし)", "yoshinob", "yugo"],
    images: VergiliusImages,
    explanation: "5人で合作した作品のプロトタイプ\nランダムに生成されるダンジョンを進んでいくローグライク。インベントリから魔法を組み替えてオリジナルの魔法を作り、深みを目指そう！",
    comment: null
}

export const works: Work[] = [Corelynx, Vergilius]