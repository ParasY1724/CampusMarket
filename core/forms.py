from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-input mt-1 block w-full',
        'placeholder': 'Enter your username'
    }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'class': 'form-input mt-1 block w-full',
        'placeholder': 'Enter your password'
    }))

class SignupForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')
    
    username = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-input mt-1 block w-full',
        'placeholder': 'Enter your username'
    }))
    email = forms.CharField(widget=forms.EmailInput(attrs={
        'class': 'form-input mt-1 block w-full',
        'placeholder': 'Enter your email'
    }))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={
        'class': 'form-input mt-1 block w-full',
        'placeholder': 'Enter your password'
    }))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={
        'class': 'form-input mt-1 block w-full',
        'placeholder': 'Repeat your password'
    }))