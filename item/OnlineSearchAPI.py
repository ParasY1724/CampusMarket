import requests

def get_online_data(query):
    url = "https://real-time-product-search.p.rapidapi.com/search"
    querystring = {"q":query,"country":"in","language":"en","page":"1"}
    headers = {
        "X-RapidAPI-Key": "2b0be24cbcmshdbcebb4aa159444p1ee55djsne7d6865ca79f",
        "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com"
    }
    response = requests.get(url, headers=headers, params=querystring)
    response = response.json()
    data = []
    counter = 0
    for item in response['data']:
        counter+=1
        item_data = {
            'title' : item['product_title'],
            'img' : item['product_photos'][0],
            'url' : item['offer']['offer_page_url'],
            'provider' : item['offer']['store_name'],
            'price' : item['offer']['price']
        }
        data.append(item_data)
        if(counter >= 30):
            break
    return data
