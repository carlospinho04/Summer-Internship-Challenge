class Api::V1::PersonsController < Api::V1::BaseController
  def index
    respond_with Person.all
  end

  def create
    respond_with :api, :v1, Person.create(person_params)
  end
  def update
    person = Person.find(params["id"])
    respond_with person, json: person
  end

  private

  def person_params
    params.require(:person).permit(:id, :name, :company, :email, :phone, :photo)
  end
end
