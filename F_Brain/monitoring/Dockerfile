FROM python:3.9-slim-bullseye

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 3000 

CMD ["python", "monitoring.py"] 
