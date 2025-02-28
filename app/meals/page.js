import Link from "next/link"
import classes from '@/styles/app/meals/meals.module.css'
import MealsGrid from "@/components/meals/mealsGrid"
import { getMeals } from "@/db/meals"
import { Suspense } from "react"

const MealsData = async () => {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

const Meals = () => {
  return (
    <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created{' '}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
      <p className={classes.cta}>
        <Link href={"/meals/share"}>
          Share Your Favorite Recipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
        <MealsData />
      </Suspense>
    </main>
    </>
  )
}

export default Meals