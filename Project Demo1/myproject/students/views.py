from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from .models import Student

def student_list(request):
    students = Student.objects.all()

    data = []

    for student in students:
        data.append({
            "id":student.id,
            "name":student.name,
            "age":student.age
        })

    return JsonResponse(data,safe=False)

