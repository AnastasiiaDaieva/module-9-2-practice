export default function createItemAsElement(
  mainTitle,
  image,
  description,
  category,
  issue,
  name,
  country,
  city,
) {
  const li = document.createElement("li");
  // title
  const headingThree = document.createElement("h3");
  headingThree.textContent = mainTitle;
  // img
  const img = document.createElement("img");
  img.setAttribute("src", image);
  img.setAttribute("alt", description);

  const createDescription = document.createElement("p");
  createDescription.textContent = description;
  // category and issue
  const parForCatAndIssue = document.createElement("p");

  const spanCategory = document.createElement("span");
  spanCategory.textContent = category;
  const spanIssue = document.createElement("span");
  spanIssue.textContent = issue;

  parForCatAndIssue.append(spanCategory, spanIssue);
  //  container
  const createDiv = document.createElement("div");
  // author
  const headingFour = document.createElement("h4");
  headingFour.textContent = "author:";

  const createAuthorName = document.createElement("p");
  createAuthorName.textContent = name;

  // location
  const createLocationContainer = document.createElement("p");

  const createCountry = document.createElement("span");
  createCountry.textContent = country;

  const createCity = document.createElement("span");
  createCity.textContent = city;

  createLocationContainer.append(createCountry, createCity);
  // forming the container content
  createDiv.append(headingFour, createAuthorName, createLocationContainer);
  // creating li
  li.append(headingThree, img, parForCatAndIssue, createDiv);

  return li;
}
